import {  ChangeNumber } from "./types/Storage/Storage";
import { User, StoredValue } from "./types/schema";

export function handleChangeNumber(event: ChangeNumber): void {

  // USER
  let userId = event.params.caller.toHex()
  let user = User.load(userId)

  if (!user) {
    user = new User(userId)
    user.save()
  } 

  // VALUE
  let token = new StoredValue(event.params.timestamp.toString())
  token.oldValue = event.params.oldValue
  token.newValue = event.params.newValue
  token.caller = userId
  token.save()  
}
