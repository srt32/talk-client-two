<h3>Conversations for {{model.owner.name}}</h3>

<button {{action 'createConversation'}}>We talked!</button>

<ul>
{{#each conversation in model}}
  <li>{{conversation.created_at}}</li>
{{/each}}
</ul>

