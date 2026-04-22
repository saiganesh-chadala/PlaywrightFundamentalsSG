import { test , expect  } from '@playwright/test'

//skip test
test.skip('skipped test ' , async ({page})=> {
    //This test is skipped
});

//Only run this test
test.only('focussed test' , async ({page}) => {
    //Only this test will be runned
})

//Mark as failing
test.fail('expected to be failed ' , async ({page})=> {
    //This Test is expected to be failed
})

//Slow test
test('slow test', async ({page})=>{
    //Has extended timeout for this test
});
// test.slow(true);

//Conidtional Skip
test('Browser Conditional ' , async({page , browserName}) =>{
    test.skip(browserName === 'firefox' , "not suppported in firefox");
})