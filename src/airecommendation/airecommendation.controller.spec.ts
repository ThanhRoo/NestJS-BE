import { Test, TestingModule } from '@nestjs/testing';
import { AirecommendationController } from './airecommendation.controller';
import { AirecommendationService } from './airecommendation.service';

describe('AirecommendationController', () => {
  let controller: AirecommendationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirecommendationController],
      providers: [AirecommendationService],
    }).compile();

    controller = module.get<AirecommendationController>(AirecommendationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
