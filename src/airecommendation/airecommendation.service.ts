import { Injectable } from '@nestjs/common';
import { CreateAirecommendationDto } from './dto/create-airecommendation.dto';
import { UpdateAirecommendationDto } from './dto/update-airecommendation.dto';

@Injectable()
export class AirecommendationService {
  create(createAirecommendationDto: CreateAirecommendationDto) {
    return 'This action adds a new airecommendation';
  }

  findAll() {
    return `This action returns all airecommendation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} airecommendation`;
  }

  update(id: number, updateAirecommendationDto: UpdateAirecommendationDto) {
    return `This action updates a #${id} airecommendation`;
  }

  remove(id: number) {
    return `This action removes a #${id} airecommendation`;
  }
}
