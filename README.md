# Summary
In the process of understanding a bunch of tools over the years, I wanted to put a bunch of the knowledge together with various utilities and set up a means to test myself a bit more.  First off, sure making an app has some use, but it is more than just a simple gallery app.  It covers much of the following:

## Tools Incorporated
- Clerk User Management
- Vercel Hosting
- Vercel Postgres hosting with Neon
- Sentry for Error Management
- ShadUI as a new UI Component Library.
- Posthog for user Analytics
- Upstash for Rate limiting
- NextJs for some additional design concepts.
- - Parallel Routings so depending on how the page state is, it will have 2 looks. Useful for modals and direct links.
- - Use Client
- - "force-dynamic"
- - ...and much more.

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
- [x] Parallel Routing / Image Page
- [x] Upload Buttons complete
- [x] ShadUi set up toasts.
- [x] Delete Button
- [x] Analytics (posthog)
- [ ] When Deleting from the Modal, it will not close it on completion.
- [x] Rate Limiting (upstash)
- [ ] Create a new Route in uploadthing/core in order to delete a file from uploadThing server.

# Clerk
User Management. Starts to cost after 10k unique monthly users.  I think it is like $0.01 per user after 10k.   Clerk is useful if you arent creating something for a large userbase, however if we want to grow, we will need to pay.   In order to better understand the goals and use of this, we would need to make sure whatever we are doing has the income to manage it.  An Ad Revenue or subscription model helps in that.
https://clerk.com/

# Sentry
Sentry.io is used to manage errors in the Application.  You can go there, run its respective set up and youw ill get it all setup from within our app.
[Sentry Website](https://sentry.io)

# Parallel Routes
Used to overlay content and update the route, BUT if you go to that URL listed, it will route to a different page.  This allows the user to update in real time what they are looking at with modals ( or some other means ) and if they share the link, it will go back to a custom page just for that item.
https://nextjs.org/docs/messages/sync-dynamic-apis

# UploadThing
This is a document repo, similar to IMGUR, except it has privacy attached, so you can only get the content if you have the tokens to do so.  It is useful for organizing data. It advertises 1g of free storage, which isnt bad expecially for understanding demo or things which dont need large datastores.  The real utility witha Clerk is the ease of integration with apps.  They have their own tooling to manage it all, which is nice.  

A perk of upload thing, beyond the use for demos is the ability for a user to upload the data with your respective tokens to their site directly, allowing you to bypass the "over-the-wire" costs that some companies like Vercel may charge as file content sizes can count against people for throughput etc.

[uploadthing.](https://docs.uploadthing.com/)

# NextJs Taint
Currently experimental, you can look in the `react` module and see some of their experimental functions.   You can use some of them to wrap data objects and tell them what they would never want to release to the user.   Examples are things like PII, addresses, or anything similar to that.

While I didnt implement it at the moment, it is great to hide anything from leaking to the server.

# Shadcn UI
This is a UI Component library that is really nice.  You can use a bunch of components they havem but I am just using this Sonnar object which is a toast.  It looks really nice.

It has value to look into some of the other components, but it gives you the freedom to adjust components how you want with their source code.  So that is nice!  I never really heard about them, but im not in the UI space as often.

# PostHog
User Analytics to understand user patterns.  If everyone is doing the same pattern we can either improve that pattern or see how we can bring something they like forward to other areas.  Its open source, so thats always good.

This has server and client side analytics to track actions and what events are being done on the server.

[PostHog Website](https://posthod.com)

# Upstash
Upstash is a rate limiting tool. When you create and set it up like in the previous commit, you can add it in things like the middleware of your upload to verify you can do what you want it to di in the frequency you like.

You can test this by pushing the extremes of like 2 uploads in 200s which will show rate limiting getting hit easily. This proves it works by determining the success of it.

Under the hood, it runs a redis instance which essentially tracks the uniqueness that you are measuring against at the throughput you are asking.   It will then track that information for you and return errors if it hits the limit on the specific requrest.

-------

# My Thanks
I just wanted to give a shoutout to Theo who assisted and kicked around ideas.
