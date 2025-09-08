"use client";
import { api } from "../(trpc)/query-client";

export default function CurrentUser() {
  const { data: sessionData } = api.user.currentSession.useQuery();

  return <div>{JSON.stringify(sessionData)}</div>;
}
