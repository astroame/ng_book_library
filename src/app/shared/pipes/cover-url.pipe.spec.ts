import { CoverUrlPipe } from './cover-url.pipe';

describe('SafeUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new CoverUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
