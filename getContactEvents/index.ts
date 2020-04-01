import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function(
  context: Context,
  req: HttpRequest,
  contagiousEventsDocuments: Array<ContagiousEventDocument>,
): Promise<void> {
  console.log(contagiousEventsDocuments);
  if (contagiousEventsDocuments && contagiousEventsDocuments.length > 0) {
    const hashedEvents = contagiousEventsDocuments
      .map(document => document.hashedEvents)
      .reduce((prev, current) => prev.concat(current));

    context.res = {
      body: { hashedEvents },
    };
  } else {
    context.res = {
      status: 204,
    };
  }
};

export default httpTrigger;
