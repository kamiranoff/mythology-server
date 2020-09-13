import { Test, TestingModule } from '@nestjs/testing';
import { BeingController } from './being.controller';

describe('BeingController', () => {
  let controller: BeingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeingController],
    }).compile();

    controller = module.get<BeingController>(BeingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
