export async function executeCode(code: string): Promise<void> {
    console.log("Executing machine code...");
  
    const tempFile = new TextEncoder().encode(code);
    const tempFilePath = "./temp.ts";
  
    // Write the code to a temporary file
    await Deno.writeFile(tempFilePath, tempFile);
  
    const start = performance.now(); // Start benchmarking
  
    try {
      // Dynamically import and execute the temporary file
      const module = await import(`file://${Deno.cwd()}/${tempFilePath}`);
      console.log("Execution result:", module);
    } catch (error) {
      console.error("Error executing code:", error);
    } finally {
      // Clean up temporary file
      await Deno.remove(tempFilePath);
  
      const end = performance.now(); // End benchmarking
      console.log(`Execution time: ${(end - start).toFixed(3)} ms`);
    }
  }
  
  // Standalone execution
  if (import.meta.main) {
    const exampleCode = `
      // Example TypeScript code
      let sum:number = 0;
      for (let i:number = 0; i < 100; i++) {
        sum += i;
      }
      console.log("Sum from 0 to 99:", sum);
    `;
  
    executeCode(exampleCode).then(() => {
      console.log("Code execution complete.");
    });
  }
  