import { Test, TestingModule } from '@nestjs/testing';
import { BeingService } from './being.service';

describe('BeingService', () => {
  let service: BeingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeingService],
    }).compile();

    service = module.get<BeingService>(BeingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
