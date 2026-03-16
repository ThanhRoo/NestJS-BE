import { PartialType } from '@nestjs/mapped-types';
import { CreateAirecommendationDto } from './create-airecommendation.dto';

export class UpdateAirecommendationDto extends PartialType(CreateAirecommendationDto) {}
