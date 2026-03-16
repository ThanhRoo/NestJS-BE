import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AirecommendationService } from './airecommendation.service';
import { CreateAirecommendationDto } from './dto/create-airecommendation.dto';
import { UpdateAirecommendationDto } from './dto/update-airecommendation.dto';

@Controller('airecommendation')
export class AirecommendationController {
  constructor(private readonly airecommendationService: AirecommendationService) {}

  @Post()
  create(@Body() createAirecommendationDto: CreateAirecommendationDto) {
    return this.airecommendationService.create(createAirecommendationDto);
  }

  @Get()
  findAll() {
    return this.airecommendationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.airecommendationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAirecommendationDto: UpdateAirecommendationDto) {
    return this.airecommendationService.update(+id, updateAirecommendationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.airecommendationService.remove(+id);
  }
}
