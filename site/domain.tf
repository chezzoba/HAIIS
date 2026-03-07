# Create an ACM certificate
resource "aws_acm_certificate" "website_certificate" {
  domain_name       = local.domain_name
  validation_method = "DNS"
  subject_alternative_names = ["*.${local.domain_name}"]
}

# Create a custom domain name for the API Gateway
resource "aws_api_gateway_domain_name" "api_domain" {
  domain_name     = local.domain_name
  regional_certificate_arn = aws_acm_certificate.website_certificate.arn
  endpoint_configuration {
    types = [ "REGIONAL" ]
  }
}

# Get the zone ID for your domain
data "cloudflare_zone" "website_zone" {
  name = local.domain_name
}

# Create an A record for the root domain
resource "cloudflare_record" "website_record" {
  zone_id = data.cloudflare_zone.website_zone.id
  name    = "@"
  type    = "CNAME"
  proxied = false
  value   = aws_cloudfront_distribution.website_distribution.domain_name
}

# Create a CNAME record for www subdomain
resource "cloudflare_record" "www_redirect" {
  zone_id = data.cloudflare_zone.website_zone.id
  name    = "www"
  type    = "CNAME"
  proxied = false
  value   = local.domain_name
}
