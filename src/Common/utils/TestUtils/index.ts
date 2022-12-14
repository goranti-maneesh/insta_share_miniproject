
export function resolveWithTimeout<T>(response: T): Promise<T> {
    const timeOut = process.env.IS_JEST ? 0 : 2000;
    return new Promise((resolve) => {
      setTimeout(() => resolve(response), timeOut);
    });
  }
  
  export function waitForMilliseconds(milliSeconds: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), milliSeconds);
    });
  }
  