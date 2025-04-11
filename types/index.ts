/** @format */
import { CarType } from "@/lib/validators/car.schema";
import { DealerInput } from "@/lib/validators/dealer.schema";
import { ManufacturerInput } from "@/lib/validators/manufacturer.schema";
import { UserInput } from "@/lib/validators/user.schema";

export type User = UserInput;
export type CarTypeS = CarType;
export type manufacturer = ManufacturerInput;
export type dealer = DealerInput;
