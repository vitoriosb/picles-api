export interface IUseCase<Input, Output> {
  run(Input: Input): Promise<Output>;
}
