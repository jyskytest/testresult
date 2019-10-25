# Some notes

Hi,

I did not use any 3rd party package like lodash, underscore etc.  Clearly, this test app would never scale because in reality, you would never place all messages or members into the store.  This would be a DB query to join the data -- not a client side operation.  Especially when dealing with a significant amount of data.

I have included a jest test for the new messages component.

Other features to add to this sample app could be:

1. Introduce API layer that accepts messages <fromIndex->Number of messages>
1. Use an IntersectionObserver to implement infinite scrolling.
1. Themeing via Redux.  (i.e choose a dark theme and change the look and feel)


Kind Regards,


James

