# Contact form setup (Google Apps Script)

The Contact page sends messages to a small Google Apps Script that runs in the
church's Google account and emails them to 21stccwc@gmail.com. Visitors can use
any email provider (AOL, Yahoo, Outlook, iCloud, etc.).

## One-time setup

1. Sign in to Google as **21stccwc@gmail.com**.
2. Go to https://script.google.com and click **New project**.
3. Delete the sample code, paste in everything from `contact-form.gs`, and
   click **Save**. Name the project "Website Contact Form".
4. Click **Deploy → New deployment**. Click the gear next to "Select type" and
   choose **Web app**.
   - Description: Website contact form
   - Execute as: **Me (21stccwc@gmail.com)**
   - Who has access: **Anyone**
5. Click **Deploy**, then **Authorize access**, choose the church account, and
   allow it to send email as you. (If Google shows "Google hasn't verified this
   app", click **Advanced → Go to Website Contact Form**. It's your own script.)
6. Copy the **Web app URL** (it ends in `/exec`).
7. Put that URL in `site/pages/contact.html` in the form's `data-endpoint`
   attribute.

## Updating the script later

Edit the code, then **Deploy → Manage deployments → (pencil) Edit →
Version: New version → Deploy**. The URL stays the same.

## Limits

Free Gmail accounts can send about 100 emails a day through Apps Script.
