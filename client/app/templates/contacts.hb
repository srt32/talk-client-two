<h3>New contact</h3>
{{input type="text" id="new-contact-name" placeholder="Enter a name" value=name action="createContact"}}

<ul>
{{#each sortedContacts}}
  <li>{{score}} {{name}} {{frequency}} {{lastConversationDaysAgo}}</li>
{{/each}}
</ul>
