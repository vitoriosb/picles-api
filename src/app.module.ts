import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { PetModule } from './pet/pet.module';
import { ShelterModule } from './shelter/shelter.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MulterModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('DB_CONNECTION_STRING'),
      }),
    }),
    ShelterModule,
    PetModule,
  ],
})
export class AppModule {}
