import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShelterModule } from './shelter/shelter.module';

@Module({
  imports: [
    ShelterModule,
    // MongooseModule.forRoot(
    //   'mongodb+srv://Vitoriosb:Vitorio.12@cluster0.vqvmsri.mongodb.net/picles?retryWrites=true&w=majority&appName=Cluster0',
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
