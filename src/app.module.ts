import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './modules/cars/controllers/cars.controller';
import { CarsService } from './modules/cars/services/cars.service';
import { BrandsModule } from './modules/brands/brands.module';

@Module({
  imports: [BrandsModule],
  controllers: [AppController, CarsController],
  providers: [AppService, CarsService],
})
export class AppModule {}
