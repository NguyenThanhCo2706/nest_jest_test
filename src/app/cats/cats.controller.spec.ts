import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let controller: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('should return an cat', async () => {
      expect(controller.findOne('')).toEqual({
        id: expect.any(Number),
        name: expect.any(String),
      });
    });
  });
});
