// Avoid such fat interfaces

// export interface IMultifunction {
//     print(): void,
//     getPrintSpoolDetails(): void,
//     scan(): void,
//     scanPhoto(): void,
//     fax(): void,
//     internetFax(): void
// }

// Instead break down interface to follow ISP
// This allows adheres to SRP in SOLID

export interface IPrint {
  print(): void;
  getPrintSpoolDetails(): void;
}

export interface IScan {
  scan(): void;
  scanPhoto(): void;
}

export interface IFax {
  fax(): void;
  internetFax(): void;
}
