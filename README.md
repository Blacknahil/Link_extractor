# Google Docs Embedded Links Extractor

This Google Apps Script project automates the extraction of all hyperlinks embedded within a Google Docs document. It scans through the document, identifies all the links, and retrieves both the URLs and the associated text (word or phrase) to which the links are embedded.

## Features

- Extracts and logs all the embedded links from a Google Docs file.
- Captures the text associated with each hyperlink.
- Displays the results in the Execution Log for easy access and review.

## How to Use

1. Open your Google Docs file.
2. Navigate to `Extensions > Apps Script`.
3. In the Apps Script editor, delete any existing code and copy-paste the provided script (see below).
4. Save the script and name it (e.g., `LinkExtractor`).
5. Run the script by clicking the play icon next to the `extractLinks` function.
6. View the extracted links by going to `View > Logs`.

## Requirements

- A Google Docs file with embedded hyperlinks.
- Access to Google Apps Script (available through `Extensions > Apps Script` in Google Docs).

## Output

The extracted links will be displayed in the Apps Script Execution Log, which shows:

- The full text or phrase associated with the link.
- The URL of the hyperlink.



## License

This project is open-source and can be modified or distributed.