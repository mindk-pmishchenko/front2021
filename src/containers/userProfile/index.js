import {UserProfile} from "../../components/userProfile";

export function UserProfileContainer({ firstName, lastName, middleName, birthdayYear }) {
    const fullName = `${firstName} ${lastName} (${middleName})`;
    const age = 2021 - birthdayYear;

    return <UserProfile fullName={fullName} age={age} />
}