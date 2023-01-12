# SMF-Toolbar
Google Sheets toolbar add on built to automate and clean NNU's Student Managed Fund's stock portfolio. Written in Google's App Script

## Disclaimer
These tools are specifically tailored for NNU's SMF spreadsheets. This means the specific spreadsheet ranges and ID's will likely not be useful to anyone else. 
However, the general code for extending Google Sheets could be useful to begin modifying this program to fit other sheet structures, and same goes for the automation logic. This code should work with modifications to the ranges and sheet ID's with minimal adjustments accordingly. 

## General Sheets Structure 
These tools are designed to work with two spreadsheets, one with general list of stock holdings and various data, and a second with this data more organized.

## Sector Extension
This file contains the toolbar extension on the organized sector sheet. It currently scans the general holdings sheet for stocks not already organizee in the sector
sheet. If any stocks have not yet been added to the sector sheet, their tickers are appended to the sector sheet  to be sorted. Potential features to add:
- [ ] Migrate share count with ticker 
