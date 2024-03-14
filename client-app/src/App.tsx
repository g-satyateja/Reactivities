import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Header, HeaderContent, Icon, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  });

  return (
    <div>
      <Header as="h2">
        <Icon name="users" />
        <HeaderContent>Reactivities</HeaderContent>
      </Header>
      <ul>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </ul>
    </div>
  );
}

export default App;
