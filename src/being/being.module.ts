import { Module } from '@nestjs/common';
import { BeingController } from './being.controller';
import { BeingService } from './being.service';

@Module({
  controllers: [BeingController],
  providers: [BeingService]
})
export class BeingModule {}
