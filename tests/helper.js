const loginWith = async (page, username, password) => {
    await page.getByRole('button', { name: 'Log In' }).click()
    await page.getByRole('textbox').first().fill(username)
    await page.getByRole('textbox').last().fill(password)
    await page.getByRole('button', { name: 'login' }).click()
}

const createNote = async (page, noteContent) => {
    await page.getByRole('button', { name: 'new note' }).click()
    await page.getByRole('textbox').fill(noteContent)
    await page.getByRole('button', { name: 'save' }).click()
}

export { loginWith, createNote }