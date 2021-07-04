# Functions

APIs

- sourceLead

  - create lead in Close (if it doesn't exist)
  - update lead source

- formSubmission
  - find or create lead in Close
  - create Form Submission Activity
  - if for the web development program (or scholarships), create a matching opportunity if one does not exist.
    - if it's a new opportunity set the status to Applied if it's a program application, otherwise prospecting
  - Handle weekend course registration
    - create Weekend Course Opportunity
    - send fee invoice and email

Web Hooks

- on Program Acceptance in Close
  - send acceptance email
  - update opportunity in Close (mark updated, move to enrolling)
- on eSignature sign:
  - update opportunity in Close (mark signed, move to enrolling)
  - store document in Google Drive
- on Stripe payment:
  - if deposit payment:
    - update opportunity in Close (mark paid, move to enrolling)
  - else
    - assign task to follow up
  - store reciept in Google Drive
- on Postmark events add note (or log event somewhere)
- on Calendly events:
  - add note
  - update opportunity to 'interviewing' on create
  - assign task to follow up on cancellation

# Close Data

## Custiom Fields

## Lead

Referral (Contact, Multiple)
Source (Choices, Multiple)

## Opportunity

Cohort
Deposit Paid
SEA Signed
Financial Clearance

## Custom Activities

### Program Acceptance

Scholarship Award
Cohort

## Form Submission

Title (Text)
Details (Text)
Submitted (Timestamp)
