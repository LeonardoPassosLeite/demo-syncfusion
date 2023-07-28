import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense, loadCldr, setCulture } from '@syncfusion/ej2-base';

import numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import gregorian from 'cldr-data/main/pt/ca-gregorian.json';
import numbers from 'cldr-data/main/pt/numbers.json';
import timeZoneNames from 'cldr-data/main/pt/timeZoneNames.json';
import weekData from 'cldr-data/supplemental/weekData.json';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmpCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXhcdnVXRGNeVEV1WUQ=');

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames, weekData);

setCulture('pt-br');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
