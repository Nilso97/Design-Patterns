export type SystemUserAddressProtocol = { street: string; number: number };

export interface ISystemUserProtocol {
  firstName: string;
  userName: string;

  getAddresses(): Promise<SystemUserAddressProtocol[]>;
}
