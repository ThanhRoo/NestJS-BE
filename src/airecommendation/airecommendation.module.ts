import { Module } from '@nestjs/common';
import { AirecommendationService } from './airecommendation.service';
import { AirecommendationController } from './airecommendation.controller';

@Module({
  controllers: [AirecommendationController],
  providers: [AirecommendationService],
})
export class AirecommendationModule {}
