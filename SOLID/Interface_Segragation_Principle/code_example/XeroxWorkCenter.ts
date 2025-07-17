import { IFax, IPrint, IScan } from "./interfaces";

export class XeroxWorkCenter
  implements IPrint, IScan, IFax
{
  print(): void {
    // Assume Print logic
  }

  getPrintSpoolDetails(): void {
    // Assume getPrintSpoolDetails logic
  }

  scan(): void {
    // Assume scan logic
  }

  scanPhoto(): void {
    // Assume scan photo logic
  }

  fax(): void {
    // Assume fax logic
  }

  internetFax(): void {
    // Assume internet fax
  }
}
