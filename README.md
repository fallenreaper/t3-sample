# Sample Test

## TODO

- [x] Make it Deploy (vercel)
- [x] Scaffold basic UI with Mock Data
- [x] Tidy up build process
- [x] Actually set up databases ( vercel postgres )
- [x] Attach DB to UI
- [x] Add authentication ( w/ Clerk)
- [x] Add image upload
- [x] Taint (server only)
- [x] User Next/Image component
- [x] Error Management ( w/ Sentry )
- [ ] Routing / Image Page
- [ ] Delete Button
- [ ] Analytics (posthog)
- [ ] Rate Limiting (upstash)

# Clerk
User Management. Starts to cost after 10k unique monthly users.  I think it is like $0.01 per user after 10k.   Clerk is useful if you arent creating something for a large userbase, however if we want to grow, we will need to pay.   In order to better understand the goals and use of this, we would need to make sure whatever we are doing has the income to manage it.  An Ad Revenue or subscription model helps in that.
https://clerk.com/

# Sentry
Sentry.io is used to manage errors in the Application.  You can go there, run its respective set up and youw ill get it all setup from within our app.
https://sentri.io

# Parallel Routes
Used to overlay content and update the route, BUT if you go to that URL listed, it will route to a different page.  This allows the user to update in real time what they are looking at with modals ( or some other means ) and if they share the link, it will go back to a custom page just for that item.
https://nextjs.org/docs/messages/sync-dynamic-apis

# UploadThing
This is a document repo, similar to IMGUR, except it has privacy attached, so you can only get the content if you have the tokens to do so.  It is useful for organizing data. It advertises 1g of free storage, which isnt bad expecially for understanding demo or things which dont need large datastores.  The real utility witha Clerk is the ease of integration with apps.  They have their own tooling to manage it all, which is nice.  

A perk of upload thing, beyond the use for demos is the ability for a user to upload the data with your respective tokens to their site directly, allowing you to bypass the "over-the-wire" costs that some companies like Vercel may charge as file content sizes can count against people for throughput etc.

[uploadthing.](https://docs.uploadthing.com/)