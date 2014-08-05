<h3>New contact</h3>
{{input type="text" id="new-contact" placeholder="Enter a name" value="name" action="createContact"}}


<ul>
{{#each sortedContacts}}
  <li>{{score}} {{name}} {{frequency}} {{lastConversationDaysAgo}}</li>
{{/each}}
</ul>
