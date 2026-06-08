import { useParams } from 'react-router-dom';

export default function Enroll() {
  const { courseId } = useParams();

  return (
    <div>
      <h1>Enroll</h1>
      <p>Checkout for course: {courseId}</p>
    </div>
  );
}
