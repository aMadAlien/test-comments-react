import styled from 'styled-components';

export const EditorContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 700px;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #f5f5f5;
  margin: 0 auto;

  input {
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: 10px;

  button {
    margin-right: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
  display: block;
`;

export const TextArea = styled.textarea`
  width: 95%;
  min-height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  margin-bottom: 15px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;