function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Automation')
    .addItem('Update Holdings', 'updateHoldings')
    .addToUi();
}

function updateHoldings() {
  const holdingsId = 'SHEET_ID';
  const holdingsRange = 'B5:C';
  const sectorId = 'SHEET_ID2';
  const sectorRange = 'A:A';
  try {
    // Get the values from the spreadsheet using spreadsheetId and range.
    //holdings = Sheets.Spreadsheets.Values.get(holdingsId, holdingsRange);
    const holdings = SpreadsheetApp.openById(holdingsId);
    const origHoldings = holdings.getRange(holdingsRange).getValues();
    var filteredHoldings = origHoldings.filter(item => { 
        if (item[0] == '' || item[1] == '0' || item[1] == '') { 
          return false
        }
        else { 
          return true
        }
    });
    const sectorHoldings = SpreadsheetApp.openById(sectorId);
    const origSectorHoldings = sectorHoldings.getRange(sectorRange).getValues();
    var filteredSectorHoldings = origSectorHoldings.filter(item => { 
      if (item[0] == '' || item[1] == '') { 
        return false
      }
      else { 
        return true
      }
    });
    var toMigrate = filteredHoldings.filter(item => {
      if (filteredSectorHoldings.indexOf(item[0]) == -1) { 
        return false
      }
      else { 
        return true
      }
    });
    console.log(filteredHoldings);
    console.log(filteredSectorHoldings);
    console.log(toMigrate);
    toMigrate.forEach(item => sectorHoldings.appendRow(item));
    Browser.msgBox("Stock migration check complete!");

  } catch (err) {
    // TODO (developer) - Handle Values.get() exception from Sheet API
    console.log(err.message);
  }
}
