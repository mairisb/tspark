import { JwtPayload } from 'jsonwebtoken';

export interface IAccessTokenPayload extends JwtPayload {
  sub: string;
}
