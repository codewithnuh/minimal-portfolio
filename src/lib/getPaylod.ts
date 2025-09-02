"use server";

import { getPayload } from "payload";
import config from "@payload-config";

export const payloadClient = async () => await getPayload({ config });
