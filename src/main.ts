import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';


registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmpCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXhcdnVXRGNeVEV1WUQ=');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
