import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class CatsService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateCatDto) {
    return this.prisma.cat.create({ data: dto });
  }

  findAll() {
    return this.prisma.cat.findMany();
  }

  findOne(id: number) {
    return this.prisma.cat.findUnique({ where: { id } });
  }

  update(id: number, dto: UpdateCatDto) {
    return this.prisma.cat.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.cat.delete({ where: { id } });
  }
}
