let day = "   friday    ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

switch (day.trim().charAt(0).toUpperCase() + day.trim().slice(1)) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("Sorry, There Are No Appointments Available.");
        break;

    case "Monday":
    case "Thursday":
        console.log(
            "Today's Appointments Are Available From 10:00 AM To 5:00 PM"
        );
        break;

    case "Tuesday":
        console.log(
            "Today's Appointments Are Available From 10:00 AM To 6:00 PM"
        );
        break;

    case "Wednesday":
        console.log(
            "Today's Appointments Are Available From 10:00 AM To 7:00 PM"
        );
        break;

    default:
        console.log("It Is Not A Valid Day.");
}
