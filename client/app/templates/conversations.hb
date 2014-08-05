Conversations for {{model.owner.name}}
<ul>
{{#each conversation in model}}
  <li>{{conversation.created_at}}</li>
{{/each}}
</ul>

