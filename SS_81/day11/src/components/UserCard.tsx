type UserCardProps = {
  name: string;
  age: number;
  isStudent: boolean;
};

const UserCard = ({ name, age, isStudent }: UserCardProps) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>{isStudent ? "Student" : "Not a Student"}</p>
    </div>
  );
};

export default UserCard;
