/**
 *
 * @export
 * @param {import('plop').NodePlopAPI} plop
 */
export default function (plop) {
  // controller generator
  plop.setGenerator("newDay", {
    description: "Start a new AoC day",
    prompts: [
      {
        type: "input",
        name: "dayNumber",
        message: "Day number:",
      },
    ],
    actions: ({ dayNumber }) => {
      const actions = [];
      const dayRoot = `src/day-${dayNumber}`;

      for (const partNumber of [1, 2]) {
        const partRoot = `${dayRoot}/part-${partNumber}`;
        const baseFileName = `day-${dayNumber}-part-${partNumber}`;
        const problemFileName = `${partRoot}/${baseFileName}`;
        const exampleFileName = `${baseFileName}-example.txt`;
        const inputFileName = `${baseFileName}-input.txt`;
        const methodName = `SolveDay${dayNumber}Part${partNumber}`;

        actions.push(
          {
            type: "add",
            path: `${problemFileName}.ts`,
            templateFile: "templates/new-day-source.hbs",
            data: { partNumber, methodName },
          },
          {
            type: "add",
            path: `${problemFileName}.spec.ts`,
            templateFile: "templates/new-day-specs.hbs",
            data: {
              partNumber,
              baseFileName,
              problemFileName,
              exampleFileName,
              inputFileName,
              methodName,
            },
          },
          {
            type: "add",
            path: `${partRoot}/${exampleFileName}`,
            data: { partNumber },
          },
          {
            type: "add",
            path: `${partRoot}/${inputFileName}`,
            data: { partNumber },
          }
        );
      }

      return actions;
    },
  });
}
