<div>
    {posts.map((post) => (
        <h2>{post.fields.name}</h2>
    ))}

    <ul>
        {posts.map(post => (
            <li key={post.sys.id}>{post.fields.name}</li>
        ))}
    </ul>

    
        <ul>
        {props.data.map((item) => (
          <li key={item.sys.id}>
            <Link to={`/${item.fields.url}`}>{item.fields.name}</Link>
          </li>
        ))}
      </ul>
</div>


useEffect(() => {
    client.getEntries()
        .then((data) => {
            const filteredPost = data.find((post) => post.fields.name === paramId)
            setPosts(filteredPost);
        })
        .catch(console.error);
}, [paramId]);

useEffect(() => {
    client.getEntries()
      .then((response) => {
        setPosts(response.items);
      })
      .catch(console.error);
  }, []);

