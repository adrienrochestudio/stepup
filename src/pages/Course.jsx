import { useParams } from 'react-router-dom';

export default function Course() {
  const { id } = useParams();

  return (
    <div>
      <h1>Course Player</h1>
      <p>Playing course: {id}</p>
    </div>
  );
}
