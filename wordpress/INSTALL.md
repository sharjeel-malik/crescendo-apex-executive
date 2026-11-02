# Install Crescendo Apex on WordPress

This is a WordPress block theme converted from the React website in this project. It includes Home, About Shomari, Consulting, Speaking, Nonprofit Crescendo, Contact, and Privacy Policy, with the original copy, photographs, utility styles, icons, and layouts. Pages render in PHP; visitors do not need the original React application. WordPress 6.6+ and PHP 8.0+ are required.

## Installation

1. Back up your existing WordPress site and use your host's staging site first.
2. Download `crescendo-apex-wordpress.zip`. Keep the theme ZIP compressed.
3. In WordPress, open Appearance → Themes → Add New → Upload Theme. Select the ZIP, install it, and activate Crescendo Apex.
4. Find the Crescendo Apex notice in the dashboard. Check “Set the imported Home page as the homepage” if desired, then click “Import Crescendo Apex pages”. This creates the seven pages. It preserves any existing pages with matching slugs, so inspect those pages if your site already uses these URLs. Activation alone does not import content or change your homepage.
5. Open Settings → Permalinks, select Post name, and save. If an existing homepage was preserved, select your intended homepage under Settings → Reading.
6. Open Pages → Home → Edit. Click text to edit it. Select an image and choose Replace image in the block sidebar. Use List View to select nested layout elements. Save with Update.
7. Open Appearance → Editor → Design → Patterns → Template parts to edit Header and Footer. Their text, links, and images use the same editable blocks. Keep desktop and mobile navigation links in sync; the mobile copy is reachable through List View. Do not remove the mobile-menu ID or its toggle's aria-controls attribute.
8. Use the Styles panel to inspect the brand palette and fonts. The original design uses explicit utility classes; individual element colors and spacing are preserved by those classes rather than replaced globally by the Styles palette. Advanced users can adjust “Design classes” in each element's sidebar.

## Set up forms

Forms require Contact Form 7 (free). The supplied form templates are in `form-templates/` in this repository and `form-templates/` inside the installed theme.

1. Install and activate Contact Form 7 under Plugins → Add New.
2. Under Contact → Add New, create Contact, Consulting, Speaking, and Book Update forms. Paste each matching template into the Form tab.
3. In each form's Mail tab, configure your recipient address. Use a From address on your own site's domain and set Reply-To to `[email]`. Add the form's fields to the message body. Contact Form 7 does not automatically subscribe visitors to a mailing list: the Book Update form emails an opt-in request to you.
4. Copy the generated `[contact-form-7 ...]` shortcode. Edit its corresponding page, select “Crescendo contact form” in List View, and paste the shortcode into that block. Save the page.
5. Send a real test from each form and verify delivery. Configure your host's SMTP service if necessary. The theme itself does not store submissions. Before setup, visitors see a direct email link instead of a nonfunctional submit button.

Mail body example for the Contact form:

    Name: [full-name]
    Email: [email]
    Organization: [organization]
    Phone: [phone]
    Engagement: [engagement-type]
    Message: [message]
    Consent: [consent]

Adapt the fields for Speaking and Book forms to match their templates. Use your preferred spam protection supported by Contact Form 7.

## Before publishing

Review every page at desktop and mobile sizes, navigation, image cropping, all FAQ answers, and the actual forms. The conversion preserves the source page structure and styling, but exact visual parity has not been verified in a running WordPress installation. WordPress editor controls and third-party forms can differ from the React version. Fonts use Google Fonts, as on the source site. Update the Privacy Policy to reflect your WordPress host, plugins, cookies, and handling of inquiries. Use a WordPress SEO plugin if you need editable per-page descriptions and social sharing metadata.

No WordPress host has been changed by preparing this package. Installation, form configuration, and a staging check still happen in your WordPress dashboard. If your host rejects the ZIP size, raise the upload limit through its hosting panel or upload the extracted `crescendo-apex` folder to `wp-content/themes/` using the host's file manager.

## Source and maintenance

The theme source is in `wordpress/crescendo-apex/`. Its PHP-rendered blocks keep the original markup and editable text/image attributes in WordPress post content. Keep this theme active to render those custom blocks. No paid page builder is required. The existing React/Netlify website remains separate. Do not rerun the conversion tools over manually edited theme files unless you intend to replace those exported defaults.
